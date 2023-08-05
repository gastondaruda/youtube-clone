import { Box, CircularProgress, Stack } from '@mui/material';

const Loader = () =>  (
    <Box minHeight="100vw" width="100vw" sx={{ borderColor: 'primary.main' }}>
        <Stack direction='row' justifyContent='center' alignItems='center' height='80vh' width="100vw" >
        <CircularProgress />
        </Stack>
    </Box>
);

export default Loader;