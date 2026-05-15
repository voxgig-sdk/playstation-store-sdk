package core

type PlaystationStoreError struct {
	IsPlaystationStoreError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewPlaystationStoreError(code string, msg string, ctx *Context) *PlaystationStoreError {
	return &PlaystationStoreError{
		IsPlaystationStoreError: true,
		Sdk:              "PlaystationStore",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *PlaystationStoreError) Error() string {
	return e.Msg
}
