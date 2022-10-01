import styles from './InfoPanels.module.scss'
import classNames from "classnames";

const panels = [
    {
        title: 'mild pain',
        change: '-5% <= 24 change < 0',
        supply: '1120/2001',
        progress: 50
    },
    {
        title: 'moderate pain',
        change: '-10% <= 24 change < -5%',
        supply: '1120/2001',
        progress: 30
    },
    {
        title: 'severe pain',
        change: '-15% <= 24 change < -10%',
        supply: '1120/2001',
        progress: 85
    },
    {
        title: 'excruciating pain',
        change: '24 change < -15%',
        supply: '1120/2001',
        progress: 100
    },
]

export const InfoPanels = () => {

    return (
        <div className={styles.infoPanels}>
            {
                panels && panels.map(({title, change, supply, progress}) => (
                    <div key={title} className={classNames(styles.infoPanel, {
                        [styles.full]: progress === 100
                    })}>
                        <span className={styles.title}>{title}</span>
                        <div className={styles.values}>
                            <span className={styles.change}>{change}</span>

                            <span className={styles.supply}>supply: {supply}</span>
                        </div>
                        <div
                            className={styles.progress}
                            style={{
                                width: `${progress}%`
                            }}
                        />
                    </div>
                ))
            }
        </div>
    );
};
