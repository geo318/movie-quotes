import { createSlice } from '@reduxjs/toolkit';
import { Notification, Like, ToggleLike } from 'types';

const initialNotificationState = {
  notifications: [] as Notification[],
};

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: initialNotificationState,
  reducers: {
    setNotifications(state, action) {
      state.notifications = action.payload;
    },
    newNotification(state, action) {
      state.notifications.unshift(action.payload);
    },
    markAsRead(state, action) {
      state.notifications.find(action.payload)!.read = 1;
    },
    markAllAsRad(state) {
      state.notifications.forEach((n) => (n.read = 1));
    },
  },
});

export const noteActions = notificationSlice.actions;

export default notificationSlice.reducer;
