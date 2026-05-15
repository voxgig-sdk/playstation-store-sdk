# PlaystationStore SDK utility: make_context

from core.context import PlaystationStoreContext


def make_context_util(ctxmap, basectx):
    return PlaystationStoreContext(ctxmap, basectx)
