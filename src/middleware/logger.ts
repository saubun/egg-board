import moment from 'moment';

export default function logger(req: any, _res: any, next: any) {
	console.log(
		`${req.protocol}://${req.get('host')}${
			req.originalUrl
		} at ${moment().format('hh:mm:ss A')}`
	);
	next();
}
