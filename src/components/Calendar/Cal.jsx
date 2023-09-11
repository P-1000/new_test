import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Scheduler,
  DayView,
  Appointments,
  AppointmentTooltip,
} from '@devexpress/dx-react-scheduler-material-ui';

import appointments from './todays-appointments.js';

export default () => (
  <Paper>
    <Scheduler
      data={appointments}
    >
      <DayView
        startDayHour={8}
        endDayHour={19}
      />
      <Appointments />
      <AppointmentTooltip />
    </Scheduler>
  </Paper>
);
