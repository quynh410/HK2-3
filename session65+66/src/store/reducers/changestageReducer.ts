const initialChangeStage:string = "Rikkei Academy";

const changeStageReducer = (state = initialChangeStage, action:any) => {
    switch (action.type) {
        case "CHANGE_STATE":
            return "RikkeiSoft"
        default:
            return state;
    }
}
export default changeStageReducer;