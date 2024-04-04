import { categoriesEnum } from '@configs/categories'
import { ITask } from 'types'
import { create } from 'zustand'

export interface IStore {
  tasks: ITask[]
  setTasks: (tasks: ITask[]) => { [key: string]: any }

  isLoading: boolean
  setLoading: (state: boolean) => { [key: string]: any }

  category: categoriesEnum
  setCategory: (category: categoriesEnum) => { [key: string]: any }
}

const initialState = (set: any): IStore => ({
  tasks: [],
  setTasks: (tasks) => set({ tasks }),

  isLoading: false,
  setLoading: (state) => set({ isLoading: state }),

  category: categoriesEnum.quick,
  setCategory: (category) => set({ category }),
})

export const useStore = create<IStore>(initialState)
