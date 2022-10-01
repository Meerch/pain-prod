import {FC} from 'react'
import styles from './Marketplaces.module.scss'
import classNames from "classnames";
import { marketplaces } from './constants';

interface MarketplacesProps {
    className?: string;
}

export const Marketplaces: FC<MarketplacesProps> = ({className}) => {

    return (
        <div className={classNames(styles.marketplaces, className)}>
            {
                marketplaces.map(({name, href, icon}) => (
                    <a
                        key={name}
                        href={href}
                        className={styles.marketplace}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img src={icon} alt={name}/>
                    </a>
                ))
            }
        </div>
    );
};
