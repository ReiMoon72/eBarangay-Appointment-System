import axios from "axios";

const api = axios.create({
  baseURL: "/api/auth",
});

//For the service book
const UserServicesAPi = axios.create({
  baseURL: "/api",
});

const fetchAppoint = axios.create({
  baseURL: "/",
});

//For Sign in
const createUser = axios.create({
  baseURL: "/api",
});

//For fetch the latest Appointment by the user
const AppointmentFetch = axios.create({
  baseURL: "/api/userdashboard",
});

//Fetch ALL of the appointment of the user
const AppointmentGetAll = axios.create({
  baseURL: "/api/viewappoiintment",
});

//For Reschdule the user
const ReschduleUserAppint = axios.create({
  baseURL: "/api",
});

//For Deleting Appointment
const DeletingUserAppointment = axios.create({
  baseURL: "/api",
});


//For next one, if it was not showing plese add the variable to addTokenInterceptor, make it and add the variable inside of it and it will show the text for sure.

createUser.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// INTERCEPTOR FUNCTION
const addTokenInterceptor = (axiosInstance) => {
  axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      console.log("  - ❌ WARNING: No token found!");
    }

    return config;
  });
};

// APPLY INTERCEPTOR TO ALL INSTANCES THAT NEED IT
addTokenInterceptor(AppointmentFetch);
addTokenInterceptor(UserServicesAPi);
addTokenInterceptor(createUser);
addTokenInterceptor(AppointmentGetAll);
addTokenInterceptor(ReschduleUserAppint);
addTokenInterceptor(DeletingUserAppointment)

//For Deleting Appointments
export const DeleleAppointUser  = (UserAppointID) => {
  return DeletingUserAppointment.delete(`/userdashboard/${UserAppointID}`);
};

export {
  api,
  AppointmentFetch,
  UserServicesAPi,
  fetchAppoint,
  createUser,
  AppointmentGetAll,
  ReschduleUserAppint,
};

export default api;
