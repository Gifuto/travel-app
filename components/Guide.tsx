"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export const Guide = () => {
    return (
        <section className="flexCenter flex-col">
            <div className="padding-container max-container w-full pb-24">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Image src="/camp.svg" alt="camp" width={50} height={50} />
                    <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
                        We are here for you
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
                    <motion.h2
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="bold-40 lg:bold-64 xl:max-w-[390px]"
                    >
                        Guide You to Easy Path
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5 }}
                        className="regular-16 text-gray-30 xl:max-w-[520px]"
                    >
                        Only with the hilink application you will no longer get
                        lost and get lost again, because we already support
                        offline maps when there is no internet connection in the
                        field. Invite your friends, relatives and friends to
                        have fun in the wilderness through the valley and reach
                        the top of the mountain
                    </motion.p>
                </div>
            </div>

            <div className="flexCenter max-container relative w-full">
                <Image
                    src="/boat.png"
                    alt="boat"
                    width={1440}
                    height={580}
                    className="w-full object-cover object-center 2xl:rounded-5xl"
                />

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20"
                >
                    <Image
                        src="/meter.svg"
                        alt="meter"
                        width={16}
                        height={158}
                        className="h-full w-auto"
                    />
                    <div className="flexBetween flex-col">
                        <div className="flex w-full flex-col">
                            <div className="flexBetween w-full">
                                <p className="regular-16 text-gray-20">
                                    Description
                                </p>
                                <p className="bold-16 text-green-50">48 min</p>
                            </div>
                            <p className="bold-20 mt-2">Aguas Calientes</p>
                        </div>

                        <div className="flex w-full flex-col">
                            <p className="regular-16 text-gray-20">
                                Start track
                            </p>

                            <h4 className="bold-20 mt-2 whitespace-nowrap">
                                Wonorejo Pasuruan
                            </h4>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};