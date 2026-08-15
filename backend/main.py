from fastapi import FastAPI

app = FastAPI(title="ReUseNet AI")


@app.get("/")
def root():
    return {
        "message": "ReUseNet AI backend is running!"
    }