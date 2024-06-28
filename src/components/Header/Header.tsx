import Tag from "components/Elements/Tag"
import styles from "components/Header/Header.module.scss"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { CustomEase } from "gsap/CustomEase"
import { useEffect, useRef, useState } from "react"

const Header = () => {
    const handRef = useRef<{
        [key: string]: Element
    }>({})
    const sliderRef = useRef<HTMLDivElement>(null)
    const [appeal, setAppeal] = useState(0)
    const appealMessage = [
        "웹 프론트엔드",
        "적극 소통하는",
        "함께 일하고픈",
        "책임과 성실의"
    ]
    const tagMessage = ["경력2년", "끊임없이 고민하고", "노력해요"]
    useGSAP(() => {
        gsap.registerPlugin(CustomEase)

        const timeline = gsap.timeline()
        timeline
            .to(handRef.current.rightHand, {
                duration: 2.2,
                y: 100,
                x: 20,
                repeat: -1,
                repeatDelay: 0.2,
                yoyo: true,
                ease: "bounce.out"
            })
            .to(
                handRef.current.leftHand,
                {
                    duration: 2.0,
                    y: -120,
                    x: -40,
                    repeat: -1,
                    repeatDelay: 0.5,
                    ease: CustomEase.create(
                        "custom",
                        "M0,0 C0,0 0,0.054 0.05,0.085 0.056,0.088 0.118,0.096 0.142,0.06 0.179,0 0.158,-0.026 0.18,0.028 0.191,0.057 0.219,0.087 0.228,0.09 0.27,0.114 0.293,0.111 0.3,0.111 0.31,0.111 0.355,0.107 0.393,0.053 0.439,-0.013 0.415,-0.015 0.429,0.001 0.466,0.045 0.481,0.087 0.502,0.113 0.518,0.133 0.554,0.172 0.574,0.189 0.581,0.197 0.597,0.209 0.607,0.215 0.616,0.22 0.633,0.23 0.644,0.234 0.653,0.238 0.67,0.244 0.679,0.246 0.687,0.248 0.706,0.25 0.716,0.25 0.723,0.249 0.742,0.247 0.75,0.246 0.759,0.244 0.776,0.238 0.786,0.234 0.796,0.23 0.813,0.219 0.822,0.214 0.832,0.208 0.848,0.196 0.856,0.188 0.873,0.171 0.909,0.134 0.925,0.114 0.945,0.088 0.946,-0.001 1,0.001 "
                    )
                },
                "0.4"
            )
    })

    useEffect(() => {
        const interval = setInterval(() => {
            // Index 업데이트
            setAppeal((prevIndex) => {
                return prevIndex === 4 ? 1 : prevIndex + 1
            })
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        handleTransform()

        if (appeal === 4) {
            setTimeout(() => {
                handleTransform(true)
            }, 600)
        }
    }, [appeal])

    const addRef = (element: HTMLImageElement | null) => {
        if (!element) return
        const name = element.className
        handRef.current[name] = element
    }

    const updateAppealMessage = (message: string[]) => {
        const startMessage = message[0]
        return [...message, startMessage]
    }

    const handleTransform = (remove?: boolean) => {
        if (remove) {
            sliderRef.current?.style.removeProperty("transition")
            sliderRef.current?.style.setProperty("transform", `translateY(0%)`)
        } else {
            sliderRef.current?.style.setProperty(
                "transform",
                `translateY(-${100 * appeal}%)`
            )
            sliderRef.current?.style.setProperty(
                "transition",
                " transform 500ms ease-in-out"
            )
        }
    }

    return (
        <>
            <header className={styles.layout}>
                <div className={styles.container}>
                    <div className={styles.rundown}>
                        <ul>
                            <li>안녕하세요</li>
                            <li className="appeal">
                                <div className={styles.slider}>
                                    <div className={styles.slider__display}>
                                        <div
                                            ref={sliderRef}
                                            className={styles.slider__container}
                                        >
                                            {updateAppealMessage(
                                                appealMessage
                                            ).map((appeal, index) => (
                                                <span key={appeal + index}>
                                                    {appeal}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                개발자
                            </li>
                            <li>강다현 입니다.</li>
                        </ul>
                        <div className={styles.rundown__tag}>
                            <Tag
                                type="glow"
                                color="none"
                                message={tagMessage}
                                fontSize={18}
                            />
                        </div>
                    </div>
                    <div className={styles.frame}>
                        <div className={styles.frame__image}>
                            <img
                                ref={addRef}
                                className="rightHand"
                                src="/images/right_hand.svg"
                            />
                            <img className="body" src="/images/body.svg" />
                            <img
                                ref={addRef}
                                className="leftHand"
                                src="/images/left_hand.svg"
                            />
                        </div>
                        <div className={styles.frame__shape}>
                            <img src="/images/spark.png" />
                            <img src="/images/twinkle.png" />
                            <img src="/images/star.png" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
