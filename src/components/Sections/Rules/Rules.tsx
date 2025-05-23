import { TbSmokingNo } from 'react-icons/tb';
import { GiPartyPopper } from 'react-icons/gi';
import { FaDog, FaVolumeUp } from 'react-icons/fa';
import { FaRegTrashCan } from 'react-icons/fa6';
import { PiPlant } from 'react-icons/pi';
import { useLang } from '@/lang';
import { useCallback } from 'react';
import { Section, SectionHeader } from 'components/Section';
import { NAVIGATION } from '@/constants.tsx';
const styles = {
  li: 'flex items-start gap-3',
  iconWrapper: 'bg-primary/10 text-secondary font-medium rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0',
};

export const Rules = () => {
  const { getTranslation } = useLang();

  const translate = useCallback((key: string) => getTranslation(`sections.stayInformation.${key}`), [getTranslation]);

  return (
    <Section id={NAVIGATION.RULES.id} className="px-[5%] py-20">
      <div className="mx-auto">
        <SectionHeader text={translate('title')!} />

        <div className="max-w-4xl 2xl:max-w-full 2xl:grid 2xl:grid-cols-2 mx-auto space-y-6 2xl:space-y-0 2xl:gap-8">
          {/* House Rules */}
          <div className="bg-white rounded-xl overflow-hidden flex-grow">
            <div>
              <h4 className="font-medium text-lg mb-3 border-b-2 border-b-border">House Rules</h4>
              <ul className="space-y-4">
                <li className={styles.li}>
                  <span className={styles.iconWrapper}>
                    <TbSmokingNo className={'text-2xl'} />
                  </span>
                  <div>
                    <h4 className="font-medium">{translate('noSmoking.title')}</h4>
                    <p className="text-muted-foreground text-sm">{translate('noSmoking.description')}</p>
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
                    <h4 className="font-medium">{translate('noParties.title')}</h4>
                    <p className="text-muted-foreground text-sm">{translate('noParties.description')}</p>
                  </div>
                </li>

                <li className={styles.li}>
                  <span className={styles.iconWrapper}>
                    <FaVolumeUp className="text-2xl" />
                  </span>
                  <div>
                    <h4 className="font-medium">{translate('quietHours.title')}</h4>
                    <p className="text-muted-foreground text-sm">{translate('quietHours.description')}</p>
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
                    <h4 className="font-medium">{translate('pets.title')}</h4>
                    <p className="text-muted-foreground text-sm">{translate('pets.description')}</p>
                  </div>
                </li>

                <li className={styles.li}>
                  <span className={styles.iconWrapper}>
                    <FaRegTrashCan className="text-xl" />
                  </span>
                  <div>
                    <h4 className="font-medium">{translate('tidyDeparture.title')}</h4>
                    <p className="text-muted-foreground text-sm">{translate('tidyDeparture.description')}</p>
                  </div>
                </li>

                <li className={styles.li}>
                  <span className={styles.iconWrapper}>
                    <PiPlant className="text-2xl" />
                  </span>
                  <div>
                    <h4 className="font-medium">{translate('ecoFriendly.title')}</h4>
                    <p className="text-muted-foreground text-sm">{translate('ecoFriendly.description')}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Amenities */}
          <div className=" overflow-hidden">
            <div>
              <h4 className="font-medium text-lg mb-3 border-b-2 border-b-border">Facilities</h4>
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
                      <span>Soundproof rooms</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Non-smoking rooms</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-lg mb-3">Bathroom</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Private bathroom with shower or bathtub</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Free toiletries</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Towels & toilet paper</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Hairdryer</span>
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
                      <span>Private terrace or patio</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Outdoor furniture</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Garden</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Free on-site parking</span>
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
                      <span>Flat-screen TV</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Cable channels</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Satellite channels</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Television</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
