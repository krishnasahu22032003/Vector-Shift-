from collections import defaultdict, deque
from typing import List

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Node(BaseModel):
    id: str


class Edge(BaseModel):
    source: str
    target: str


class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]


@app.get("/")
def root():
    return {"Ping": "Pong"}


def is_dag(nodes, edges):
    graph = defaultdict(list)
    indegree = {node.id: 0 for node in nodes}

    for edge in edges:
        graph[edge.source].append(edge.target)
        indegree[edge.target] += 1

    queue = deque(
        node_id
        for node_id, degree in indegree.items()
        if degree == 0
    )

    visited = 0

    while queue:
        node = queue.popleft()
        visited += 1

        for neighbour in graph[node]:
            indegree[neighbour] -= 1

            if indegree[neighbour] == 0:
                queue.append(neighbour)

    return visited == len(nodes)


@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):

    return {
        "num_nodes": len(pipeline.nodes),
        "num_edges": len(pipeline.edges),
        "is_dag": is_dag(
            pipeline.nodes,
            pipeline.edges,
        ),
    }