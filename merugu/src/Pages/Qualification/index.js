import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Qualification() {

return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualification</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="RGR Siddhanthi" src="data:data:image/png;base64,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" />
        </ListItemAvatar>
        <ListItemText
          primary="Masterji Degree&Pg college"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                70% CGPA
              </Typography>
              {" — Bachelor of Business Administration"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="SR educational academy" src="data:data:image/png;base64,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" />
        </ListItemAvatar>
        <ListItemText
          primary="SR Junior College"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                93% CGPA
              </Typography>
              {" — Intermediate studies with  MPC"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="loyola" src="data:data:image/jpeg;base64,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" />
        </ListItemAvatar>
        <ListItemText
          primary="loyola High School"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                90% CGPA
              </Typography>
              {' — Higher Secondory Education with Computer Classes'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}