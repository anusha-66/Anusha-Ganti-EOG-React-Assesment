import { createSlice, PayloadAction } from 'redux-starter-kit';

export type MetricData = {
    getMetrics:[],
};

export type ApiErrorAction = {
  error: string;
};

const initialState = {
  metrics:[]
};

const toF = (c: number) => (c * 9) / 5 + 32;

// const slice = createSlice({
//   name: 'weather',
//   initialState,
//   reducers: {
//     weatherDataRecevied: (state, action: PayloadAction<WeatherForLocation>) => {
//       const { description, locationName, temperatureinCelsius } = action.payload;
//       state.temperatureinCelsius = temperatureinCelsius;
//       state.temperatureinFahrenheit = toF(temperatureinCelsius);
//       state.description = description;
//       state.locationName = locationName;
//     },
//     weatherApiErrorReceived: (state, action: PayloadAction<ApiErrorAction>) => state,
//   },
// });


const slice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
      metricDataReceived: (state, action: PayloadAction<MetricData>) => {
        //   console.log('state', MetricData);
        // const data = action.payload;
        // const metrics = [...data];
        // state.metrics = metrics;
        const { getMetrics } =  action.payload;
        state.metrics = getMetrics;
        
      },
      metricDataReceivedApiError: (state, action: PayloadAction<ApiErrorAction>) => state,
    },
  });

export const reducer = slice.reducer;
export const actions = slice.actions;
