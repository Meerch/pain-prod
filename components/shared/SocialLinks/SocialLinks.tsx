import styles from './SocialLinks.module.scss'
import {links} from "./constants";
import classNames from "classnames";
import {FC} from "react";

interface SocialLinksProps {
    className?: string;
}

export const SocialLinks: FC<SocialLinksProps> = ({className}) => {

    return (
        <div className={classNames(styles.socialLinks, className)}>
            {
                links.map(({name, href, icon}) => (
                    <a
                        key={name}
                        href={href}
                        className={styles.socialLink}
                        target='_blank'
                        rel='norefferer noopener'
                    >
                        <img src={icon} alt={name}/>
                    </a>
                ))
            }
        </div>
    )
}
