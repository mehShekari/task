import GlobalStyles from '@mui/material/GlobalStyles';

export default function GlobalStylesComoponet()
{
  return <GlobalStyles
    styles={(theme) => ({
      h1: { 
        color: theme.palette.primary.main 
      },
      h2: { 
        color: "#00ff00" 
      },
      body: { 
        backgroundColor: "#f1f1f1f1" 
      }
    })}
  />
}