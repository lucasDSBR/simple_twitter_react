import { useIndex } from "../../data/hooks/pages/useIndex.page";
import Tweet from "../components/data-display/tweet/Tweet";
import TextInput from "../components/inputs/TextInput/TextInput";
import styles from '../styles/pages/index.module.css';


export default function Index(){
	const {
		user,
		text,
		onTextChange,
		maxTextLength,
		sendTweet,
		sortedTweetList
	} = useIndex();
	return (
	<div>
		<h1 className={styles['page-title']}>DSBRTweet</h1>
		<div className={styles['tweet-container']}>
			<img src={user.picture} alt={user.name} className={styles['avatar']}/>
			<TextInput
					placeholder={'O que está acontecendo?'}
					rows={3}
					maxLength={maxTextLength}
					value={text}
					onChange={onTextChange}
			/>
		</div>

		<div className={styles['button-container']}>
			<div>
				{text.length} / {maxTextLength}
			</div>
			<button disabled={text.length === 0} className={styles['post-button']} onClick={sendTweet}>Tweetar</button>
		</div>
		<ul className={styles['tweet-list']}>
			{
				sortedTweetList.map((tweet, i) => (
						<li key={i} className={styles['tweet-list-item']}>
							<Tweet tweet={tweet}/>
						</li>
					)
				)
			}
		</ul>
	</div>
	);
}