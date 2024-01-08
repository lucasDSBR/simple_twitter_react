import styles from './Tweet.module.css';
import { DateService } from '../../../../data/services/DateService';

export default function Tweet({ tweet }){
	const { user } = tweet.data;
	return (
		<div className={styles['tweet-container']}>
			<img src={user.picture} className={styles['avatar']}/>
			<div className={styles['user']}>
				<span className={styles['user-name']}>
					{user.name}
				</span>{' '}
				<span className={styles['user-username']}>
					@{user.username}
				</span>
				<span className={styles['date']}>
					- {DateService.relativeTime(tweet.data.date)}
				</span>
			</div>
			<div className={styles['tweet-text']}>
				{tweet.data.text}
			</div>
		</div>
	);
}