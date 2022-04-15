import expres from 'express';
import path from 'path';

const app  = expres();

app.use(expres.static(path.join(__dirname,'public')));

export default app;