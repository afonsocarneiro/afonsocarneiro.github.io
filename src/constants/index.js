import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, homew, phone, email } from '../assets/index3';

export const navLinks = [
	{
		id: 'home',
		title: 'Inicio',
	},
	{
		id: 'features',
		title: 'Sobre Mim',
	},
	{
		id: 'product',
		title: 'Educação',
	},
	{
		id: 'clients',
		title: 'Clientes',
	},
];

export const features = [
	{
		id: 'feature-1',
		icon: email,
		title: 'e-mail',
		content: 'afonso.m.carneiro99@gmail.com',
	},
	{
		id: 'feature-2',
		icon: phone,
		title: 'Telefone',
		content: '911119096',
	},
	{
		id: 'feature-3',
		icon: homew,
		title: 'Residência',
		content: 'Porto, Portugal',
	},
];

export const feedback = [
	{
		id: 'feedback-1',
		content: 'Os programas são fantasticos.',
		title: 'Fundador & CEO',
		img: people01,
	},
	{
		id: 'feedback-2',
		content: 'As aplicações são muito boas.',
		name: 'Steve Mark',
		title: 'Fundador & CEO',
		img: people02,
	},
	{
		id: 'feedback-3',
		content: 'Recomendo muito.',
		title: 'Fundador & CEO',
		img: people03,
	},
];

export const stats = [
	{
		id: 'stats-1',
		title: 'Utilizadores Registrados',
		value: '0',
	},
	{
		id: 'stats-2',
		title: 'Trusted by Company',
		value: '230+',
	},
	{
		id: 'stats-3',
		title: 'Transações',
		value: '$0',
	},
];

export const footerLinks = [
	{
		title: 'Links Úteis',
		links: [
			{
				id: 'useful-link-1', // Adicione um ID único
				name: 'Conteúdo',
				link: 'https://www.hoobank.com/content/',
			},
			{
				id: 'useful-link-2',
				name: 'Como Funciona',
				link: 'https://www.hoobank.com/how-it-works/',
			},
			{
				id: 'useful-link-3',
				name: 'Criar',
				link: 'https://www.hoobank.com/create/',
			},
			{
				id: 'useful-link-4',
				name: 'Explorar',
				link: 'https://www.hoobank.com/explore/',
			},
			{
				id: 'useful-link-5',
				name: 'Termos e Serviços',
				link: 'https://www.hoobank.com/terms-and-services/',
			},
		],
	},
	{
		title: 'Comunidade',
		links: [
			{
				id: 'community-link-1',
				name: 'Centro de ajuda',
				link: 'https://www.hoobank.com/help-center/',
			},
			{
				id: 'community-link-2',
				name: 'Parcerias',
				link: 'https://www.hoobank.com/partners/',
			},
			{
				id: 'community-link-3',
				name: 'Sugestões',
				link: 'https://www.hoobank.com/suggestions/',
			},
			{
				id: 'community-link-4',
				name: 'Blog',
				link: 'https://www.hoobank.com/blog/',
			},
			{
				id: 'community-link-5',
				name: 'Newsletters',
				link: 'https://www.hoobank.com/newsletters/',
			},
		],
	},
	{
		title: 'Parceria',
		links: [
			{
				id: 'partnership-link-1',
				name: 'O nosso parceiro',
				link: 'https://www.hoobank.com/our-partner/',
			},
			{
				id: 'partnership-link-2',
				name: 'Torne-se um parceiro',
				link: 'https://www.hoobank.com/become-a-partner/',
			},
		],
	},
];

export const socialMedia = [
	{
		id: 'social-media-1',
		icon: instagram,
		link: 'https://www.instagram.com/',
	},
	{
		id: 'social-media-2',
		icon: facebook,
		link: 'https://www.facebook.com/',
	},
	{
		id: 'social-media-3',
		icon: twitter,
		link: 'https://www.twitter.com/',
	},
	{
		id: 'social-media-4',
		icon: linkedin,
		link: 'https://www.linkedin.com/',
	},
];

export const clients = [
	{
		id: 'client-1',
		logo: airbnb,
	},
	{
		id: 'client-2',
		logo: binance,
	},
	{
		id: 'client-3',
		logo: coinbase,
	},
	{
		id: 'client-4',
		logo: dropbox,
	},
];
