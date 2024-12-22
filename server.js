require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./src/models');
const { funcionalidadRoutes, moduloRoutes, perfilInversionRoutes, perfilFuncionalidadRoutes, solicitudRoutes, preguntaRoutes, respuestaRoutes, solicitudrespuestaRoutes } = require('./src/routes');  // Importar las rutas de funcionalidades
const solicitud = require('./src/models/solicitud');
const SolicitudController = require('./src/controllers/solicitudController');

const PORT = process.env.PORT || 3000;

db.sequelize.sync()
  .then(() => {
    console.log('Database connected successfully!');
  })
  .catch(err => console.log('Error connecting to the database:', err));

app.use(express.json());

app.use('/api/modulos', moduloRoutes);
app.use('/api/funcionalidades', funcionalidadRoutes);
app.use('/api/perfil-inversiones', perfilInversionRoutes);
app.use('/api/perfil-funcionalidades', perfilFuncionalidadRoutes);
app.use('/api/solicitudes', solicitudRoutes);
app.use('/api/preguntas', preguntaRoutes);
app.use('/api/respuestas', respuestaRoutes);
app.use('/api/solicitud-respuestas', solicitudrespuestaRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



