import { Collapsible } from 'components/Collapsible';
import { TbSmokingNo } from 'react-icons/tb';
import { GiPartyPopper } from 'react-icons/gi';
import { FaDog, FaVolumeUp } from 'react-icons/fa';
import { FaRegTrashCan } from 'react-icons/fa6';
import { PiPlant } from 'react-icons/pi';

const styles = {
  li: 'flex items-start gap-3',
  iconWrapper: 'bg-primary/10 text-secondary font-medium rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0',
};

export const Rules = () => {
  return (
    <section id="rules" className="px-[5%] py-20">
      <div className="mx-auto">
        <h2 className={'text-center text-4xl font-bold mb-10'}>Stay Information</h2>

        <div className="max-w-4xl 2xl:max-w-full 2xl:grid 2xl:grid-cols-2 mx-auto space-y-6 2xl:space-y-0 2xl:gap-8">
          {/* House Rules */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex-grow">
            <Collapsible title={'House Rules'} defaultOpen locked>
              <ul className="space-y-4">
                <li className={styles.li}>
                  <span className={styles.iconWrapper}>
                    <TbSmokingNo className={'text-2xl'} />
                  </span>
                  <div>
                    <h4 className="font-medium">No smoking</h4>
                    <p className="text-muted-foreground text-sm">No smoking or vaping indoors.</p>
                  </div>
                </li>

                <li className={styles.li}>
                  <span className={styles.iconWrapper}>
                    <div className="relative w-fit">
                      <GiPartyPopper className="text-3xl text-secondary border-2 border-red-500 rounded-full" />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-[120%] h-[2px] bg-red-500 rotate-45"></div>
                      </div>
                    </div>
                  </span>
                  <div>
                    <h4 className="font-medium">No parties or events</h4>
                    <p className="text-muted-foreground text-sm">No parties or drug use allowed.</p>
                  </div>
                </li>

                <li className={styles.li}>
                  <span className={styles.iconWrapper}>
                    <FaVolumeUp className="text-2xl" />
                  </span>
                  <div>
                    <h4 className="font-medium">Quiet hours</h4>
                    <p className="text-muted-foreground text-sm">Keep noise low, especially at night.</p>
                  </div>
                </li>

                <li className={styles.li}>
                  <span className={styles.iconWrapper}>
                    <div className="relative w-fit">
                      <FaDog className="text-3xl border-2 border-red-500 rounded-full" />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-[120%] h-[2px] bg-red-500 rotate-45"></div>
                      </div>
                    </div>
                  </span>
                  <div>
                    <h4 className="font-medium">Pets policy</h4>
                    <p className="text-muted-foreground text-sm">Mo pets are allowed.</p>
                  </div>
                </li>

                <li className={styles.li}>
                  <span className={styles.iconWrapper}>
                    <FaRegTrashCan className="text-xl" />
                  </span>
                  <div>
                    <h4 className="font-medium">Beach equipment</h4>
                    <p className="text-muted-foreground text-sm">Trash is collected daily. Clear bins at checkout.</p>
                  </div>
                </li>

                <li className={styles.li}>
                  <span className={styles.iconWrapper}>
                    <PiPlant className="text-2xl" />
                  </span>
                  <div>
                    <h4 className="font-medium">Property respect</h4>
                    <p className="text-muted-foreground text-sm">Turn off lights and reuse towels when possible.</p>
                  </div>
                </li>
              </ul>
            </Collapsible>
          </div>

          {/* Amenities */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 2xl">
            <Collapsible title={'Amenities'} defaultOpen locked>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium text-lg mb-3">General</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Free WiFi</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Air conditioning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Central heating</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Washing machine</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Dryer</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-lg mb-3">Entertainment</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Smart TV with Netflix</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Sound system</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Board games</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Books and magazines</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Outdoor grill</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-lg mb-3">Outdoor</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Private beach access</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Beach chairs & umbrellas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Outdoor shower</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Patio with furniture</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Parking space</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Collapsible>
          </div>
        </div>
      </div>
    </section>
  );
};
