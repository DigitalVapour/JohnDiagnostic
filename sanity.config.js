import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "6hutw20l",
    dataset: "production",
    title: "John Diagnostics Center",
    apiVersion: "2024-12-25",
    basePath: "/admin",
    plugins: [structureTool()],
    schema: {types: schemas},
})

export default config;