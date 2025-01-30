import { getContext, setContext } from "svelte"
import { type Writable, writable } from "svelte/store"

const setExpanded = (startValue: boolean) => {
  let isExpanded = writable<boolean>(startValue)
  setContext("navbarExpanded", isExpanded)
}

const getExpanded = () => {
  return getContext<Writable<boolean>>("navbarExpanded")
}

export {setExpanded, getExpanded}