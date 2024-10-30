const initialState = {
  jobs: [],  
  loading: false,
  error: null,
};
 const jobsReducer = (state = initialState,action)=>{

  switch (action.type) {
    case 'FETCH_JOBS_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_JOBS_SUCCESS':
      return { ...state, loading: false, jobs: action.payload };
    case 'FETCH_JOBS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'CREATE_JOB_SUCCESS':
      return { ...state, jobs: [...state.jobs, action.payload] };
    case 'UPDATE_JOB_SUCCESS':
      return {
        ...state,
        jobs: state.jobs.map(jobs => 
          jobs.id === action.payload.id ? action.payload : jobs
        ),
      };
    case 'DELETE_JOB_SUCCESS':
      return {
        ...state,
        jobs: state.jobs.filter(jobs => jobs.id !== action.payload),
      };
    default:
      return state;
  }
};

export default jobsReducer;