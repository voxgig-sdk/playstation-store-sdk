# PlaystationStore SDK utility: make_context

from projectname_sdk.core.context import PlaystationStoreContext


def make_context_util(ctxmap, basectx):
    return PlaystationStoreContext(ctxmap, basectx)
