import { Component, Match, Switch } from 'solid-js';
import styles from './index.module.css';

export interface DropDownItemProps {
	title: string;
	url?: string;
	align?: 'left' | 'right';
	onClick?: () => void;
}

export const DropDownItem: Component<DropDownItemProps> = ({
	url,
	title,
	align,
	onClick,
}) => {
	return (
		<div>
			<Switch>
				<Match when={url}>
					<a class={styles['item-link']} href={url} onClick={onClick}>
						<div
							class={
								align === 'left'
									? styles['sub-container-left']
									: styles['sub-container-right']
							}
						>
							<label class={styles['item-text']}>{title}</label>
						</div>
					</a>
				</Match>
				<Match when={!url}>
					<button class={styles['item-link']} onClick={onClick}>
						<div
							class={
								align === 'left'
									? styles['sub-container-left']
									: styles['sub-container-right']
							}
						>
							<label class={styles['item-text']}>{title}</label>
						</div>
					</button>
				</Match>
			</Switch>
		</div>
	);
};
