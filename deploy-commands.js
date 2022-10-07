const { REST, SlashCommandBuilder, Routes } = require('discord.js');

const token = process.env['TOKEN']
const guildId= process.env['GUILDID']
const clientId = process.env['CLIENTID']

const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
	new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
	new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
  new SlashCommandBuilder().setName('notion').setDescription('Displays the notion url!'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(token);

const deployCommands = () => {
  rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then((data) => console.log(`Successfully registered ${data.length} application commands.`))
	.catch(console.error);
}

module.exports = deployCommands;