import { FiCalendar, FiMessageCircle, FiWifi } from 'react-icons/fi';
import { useLang } from '@/lang';
import { FaPeopleGroup, FaRegTrashCan } from 'react-icons/fa6';
import { TbSmokingNo } from 'react-icons/tb';
import { GiBrokenPottery, GiHouseKeys, GiPartyPopper } from 'react-icons/gi';
import { FaVolumeUp } from 'react-icons/fa';
import { PiPlant } from 'react-icons/pi';

export function CheckingInOut() {
  const { getTranslation } = useLang();
  return (
    <section className="px-[5%] py-10 border-border border-b-4 gap-4" id={'Rules'}>
      <h2 className={'text-start text-4xl font-bold mb-10'}> {getTranslation(`sections.rules.title`)}</h2>

      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8 text-base md:text-lg text-secondary w-full">
        <div className="space-y-6">
          <div className={'flex flex-col gap-2'}>
            <h2 className="text-xl md:text-2xl font-semibold text-subtitle flex items-center gap-2">
              <FiCalendar className="text-2xl text-secondary" />
              {getTranslation('sections.rules.checkingSection.title')}
            </h2>
            <p className="mt-2">{getTranslation('sections.rules.checkingSection.checkInTime')}</p>
            <p>{getTranslation('sections.rules.checkingSection.checkOutTime')}</p>
            <p className="mt-1">{getTranslation('sections.rules.checkingSection.beforeLeaving')}</p>
          </div>

          <div className={'flex flex-col gap-2'}>
            <p className="font-semibold text-subtitle flex items-center gap-2">
              <FiMessageCircle className="text-2xl text-secondary" />
              {getTranslation('sections.rules.contact.title')}
            </p>
            <p>{getTranslation('sections.rules.contact.message')}</p>
          </div>

          <div className={'flex flex-col gap-2'}>
            <p className="font-semibold text-subtitle flex items-center gap-2">
              <FiWifi className="text-2xl text-secondary" />
              {getTranslation('sections.rules.wifiAccess.title')}
            </p>
            <p>
              <strong>{getTranslation('sections.rules.wifiAccess.userName.key')}: </strong>
              {getTranslation('sections.rules.wifiAccess.userName.value')}
            </p>
            <p>
              <strong>{getTranslation('sections.rules.wifiAccess.password.key')}: </strong>
              {getTranslation('sections.rules.wifiAccess.password.value')}
            </p>
          </div>
        </div>

        <ul className="list-none grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 space-x-6 space-y-3 *:max-w-lg">
          <li className="flex flex-col gap-2 justify-center items-center">
            <FaPeopleGroup className="text-secondary text-5xl" />
            <p className="text-center">Only registered guests are allowed.</p>
          </li>

          <li className="flex flex-col gap-2 justify-center items-center">
            <TbSmokingNo className="text-secondary text-5xl" />
            <p className="text-center">No smoking or vaping indoors.</p>
          </li>

          <li className="flex flex-col gap-2 justify-center items-center p-2">
            <div className="relative w-fit">
              <GiPartyPopper className="text-secondary text-5xl border-2 border-red-500 rounded-full p-2" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[120%] h-[2px] bg-red-500 rotate-45"></div>
              </div>
            </div>
            <p className="text-center">No parties or drug use allowed.</p>
          </li>

          <li className="flex flex-col gap-2 justify-center items-center">
            <FaVolumeUp className="text-secondary text-5xl" />
            <p className="text-center">Keep noise low, especially at night.</p>
          </li>

          <li className="flex flex-col gap-2 justify-center items-center">
            <GiBrokenPottery className="text-secondary text-5xl" />
            <p className="text-center">Report damage or issues right away.</p>
          </li>

          <li className="flex flex-col gap-2 justify-center items-center">
            <GiHouseKeys className="text-secondary text-5xl" />
            <p className="text-center">Lost keys cost €50 to replace.</p>
          </li>

          <li className="flex flex-col gap-2 justify-center items-center">
            <FaRegTrashCan className="text-secondary text-5xl" />
            <p className="text-center">Trash is collected daily. Clear bins at checkout.</p>
          </li>

          <li className="flex flex-col gap-2 justify-center items-center">
            <PiPlant className="text-secondary text-6xl" />
            <p className="text-center">Turn off lights and reuse towels when possible.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
