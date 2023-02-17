import { createSlice } from "@reduxjs/toolkit";

export const TeamSlice = createSlice({
    name: 'teams',
    initialState: {
        list: {},
        players: {},
    },
    reducers: {
        addItem: (state, { payload }) => {
            state.list = {...state.list, payload}
        },
        playersList: (state, { payload }) => {
            state.players = {...state.players, payload}
        },
        updateRuns: (state, {payload}) => {
            let {strikerId,name} = payload;
            state.players.payload.batsman = state.players.payload.batsman.map(
                c=>c.id === strikerId ? 
                {
                    ...c,
                    [name] : c[name] + 1
                } : c)
            state.players= {
                ...state.players
            }
        },
        updateBalls:(state, {payload})=>{
            state.players.payload.bowler[0].runsGiven = state.players.payload.bowler[0].runsGiven + payload.runs
            if(payload.wide || payload.noBall){
                state.players.payload.bowler[0].overs = state.players.payload.bowler[0].overs + 0.0
            } else {
                state.players.payload.bowler[0].overs = state.players.payload.bowler[0].overs + 0.1
            }
            // state.players.payload.bowler[0].overs = state.players.payload.bowler[0].overs + 0.1

            state.players.payload.thisOver.id=payload.bowlerId;
            state.players.payload.thisOver.name=payload.bowlerName;
            state.players.payload.thisOver.data.push({
                runs:payload.runs,
                wide: payload.wide ? payload.wide : 0,
                noBall: payload.noBall ? payload.noBall : 0
            })
            state.players.payload.thisOver.wide = 0;
            state.players.payload.thisOver.noBall = 0;
        },

        updateOvers:(state, {payload})=>{
            // state.players.payload.overs.id = state.players.payload.thisOver.id;
            state.players.payload.overs.push(state.players.payload.thisOver)
            // state.players.payload.bowler[0].overs = state.players.payload.bowler[0].overs +1
        },
        clearThisOver:(state, {payload})=>{
            state.players.payload.thisOver.data = [];
            state.players.payload.thisOver.id=state.players.payload.bowler[0].id;
            state.players.payload.thisOver.name = state.players.payload.bowler[0].name;
        },
        swapBatsman:(state, {payload})=>{
            state.players.payload.batsman.find((item)=>{
                if(item.striker==true){
                    item.striker=false
                } else {
                    item.striker=true
                }
            })
            state.players= {
                ...state.players
            }
        },
        newBowler:(state,{payload})=>{ 
            state.players.payload.bowler[0].name = payload;
            state.players.payload.bowler[0].id +=1;
            state.players.payload.bowler[0].overs = 0;
            state.players.payload.bowler[0].maidens = 0;
            state.players.payload.bowler[0].runsGiven = 0;
            state.players.payload.bowler[0].strikeRate = 0;
        },
        updateExtras:(state,{payload})=>{ 
            if(payload.extraType==='wide'){
                state.players.payload.thisOver.wide = 1
                state.players.payload.bowler[0].wideGiven = state.players.payload.bowler[0].wideGiven + 1
            } else if(payload.extraType==='noBall'){
                state.players.payload.thisOver.noBall = 1
                state.players.payload.bowler[0].noBallsGiven
                = state.players.payload.bowler[0].noBallsGiven
                + 1
            }
            
        }
    }
})

export const { addItem, playersList, updateRuns, updateBalls, updateOvers, clearThisOver, swapBatsman, newBowler, updateExtras } = TeamSlice.actions;

export default TeamSlice.reducer;