import {useMemo} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../redux/store'
import { actions } from '../redux/greetingSlice'
import { bindActionCreators } from '@reduxjs/toolkit'
export const useAppDispatch: () => AppDispatch = useDispatch

const rootActions = {
    ...actions
}

export const useActions = () => {
  const dispatch = useAppDispatch()
  return useMemo(() => 
    bindActionCreators(rootActions, dispatch )
  ,[dispatch])
}