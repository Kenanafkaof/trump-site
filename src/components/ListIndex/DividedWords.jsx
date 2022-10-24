import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import NotesIcon from '@mui/icons-material/Notes';
import Divider from '@mui/material/Divider';
import './index.scss'
export default function DividedWords(props) {
    const words = props.words
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 500,
        maxHeight: 500,
        bgcolor: 'background.paper'
      }}
      className='list-index'
    >
    {words.map((word, i) =>
    <>
        <ListItem>
        <ListItemAvatar>
          <Avatar>
            <NotesIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={word.word} secondary={word.count} />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
    )}
    </List>
  );
}
