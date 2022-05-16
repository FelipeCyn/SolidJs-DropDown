import { Component, createSignal, For, Show } from 'solid-js';
import { MoreIcon } from '../../icons/MoreIcon';
import { DropDownItem, DropDownItemProps } from './DropDownItem';
import styles from './index.module.css';

interface DropDownProps {
	align?: 'left' | 'right';
	items: DropDownItemProps[];
}

export const DropDown: Component<DropDownProps> = ({
	items,
	align = 'left',
}: DropDownProps) => {
	const [open, setOpen] = createSignal(false);

	return (
		<div
			class={
				align === 'left'
					? styles['direction-left']
					: styles['direction-right']
			}
		>
			<button
				onClick={() => setOpen(!open())}
				tabIndex={0}
				class={styles.container}
			>
				<MoreIcon color='white' width={30} height={30} />
			</button>
			<Show when={open()}>
				<For each={items}>
					{(item) => <DropDownItem {...item} align={align} />}
				</For>
			</Show>
		</div>
	);
};

export default DropDown;
