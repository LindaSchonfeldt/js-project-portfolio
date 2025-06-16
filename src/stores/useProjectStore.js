import { create } from 'zustand'
import projectData from '../data/projects.json'

const useProjectStore = create((set) => ({
  projects: projectData,
  activeTab: 'code',
  setActiveTab: (tab) => set({ activeTab: tab }),

  getProjectById: (id) => {
    const allProjects = [...projectData.code, ...projectData.uxui]
    return allProjects.find((project) => project.id === id)
  }
}))

export default useProjectStore
