import { createContext, useContext, ParentProps } from "solid-js";
import type { ProjectConfig } from "../configs/typings/project";

const ProjectContext = createContext<ProjectConfig>();

export function ProjectProvider(props: ParentProps<{ config: ProjectConfig }>) {
  return (
    <ProjectContext.Provider value={props.config}>
      {props.children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProject must be used within ProjectProvider");
  }
  return context;
}
