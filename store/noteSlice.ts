import { createSlice } from '@reduxjs/toolkit';
import { Notification } from 'types';

const initialNotificationState = {
  notifications: [] as Notification[],
};

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: initialNotificationState,
  reducers: {
    setNotifications(state, action: { payload: Notification[] }) {
      state.notifications = action.payload;
    },
    newNotification(state, action: { payload: Notification }) {
      state.notifications.unshift(action.payload);
    },
    markAsRead(state, action: { payload: number }) {
      state.notifications.find((e) => e.id === action.payload)!.read = 1;
    },
    markAllAsRad(state) {
      state.notifications.forEach((n) => (n.read = 1));
    },
  },
});

export const noteActions = notificationSlice.actions;

export default notificationSlice.reducer;
