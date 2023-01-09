const feedback = 'feedback';
const DATAS = `${feedback}/DATAS`;

const initialState = {
	datas: null,
}

const feedBackReducer = (state = initialState, action) => {
	switch (action.type) {
		case DATAS: {
			return { ...state, datas: action.datas }
		}
		default: {
			return state;
		}
	}
}

export const feedBackAction = (datas) => ({ type: DATAS, datas });

export default feedBackReducer;