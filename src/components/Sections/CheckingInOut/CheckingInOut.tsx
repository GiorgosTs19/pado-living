import { FiCalendar, FiClipboard, FiMessageCircle, FiWifi } from 'react-icons/fi';
import { useLang } from '@/lang';

export function CheckingInOut() {
  const { getTranslation } = useLang();
  return (
    <section className="px-[5%] py-10 border-border border-b-4 gap-4" id={'Rules'}>
      <h2 className={'text-start text-4xl font-bold mb-10 ps-3'}> {getTranslation(`sections.rules.title`)}</h2>

      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8 text-base md:text-lg text-secondary w-full">
        {/* LEFT: Check-in Info */}
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

        {/* RIGHT: House Rules */}
        <div className="space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold text-subtitle flex items-center gap-2">
            <FiClipboard className="text-2xl text-secondary" />
            House Rules
          </h2>

          <ul className="list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-6 space-y-3 *:max-w-lg">
            <li>
              <strong>Guests:</strong> Only the number of guests confirmed in the booking are allowed. Please contact the host to add additional
              guests.
            </li>

            <li>
              <strong>Smoking:</strong> 🚭 Smoking and vaping are not allowed inside. Smoke detectors are installed in all rooms.
            </li>

            <li>
              <strong>Parties & Conduct:</strong> No parties, drug use, or excessive drinking allowed.
            </li>

            <li>
              <strong>Noise:</strong> Please avoid excessive noise, especially during quiet hours.
            </li>

            <li>
              <strong>Damage:</strong> Report any damage or malfunction so we can address it promptly.
            </li>

            <li>
              <strong>Keys:</strong> Lost keys incur a €50 replacement fee.
            </li>

            <li>
              <strong>Cleanliness:</strong> Sheets are changed every 2 nights. Daily, the housekeeper removes trash and tidies the room. Please
              dispose of your trash before checkout.
            </li>

            <li>
              <strong>Eco Tips:</strong> 🌱 Please turn off lights when not in use and avoid replacing towels unnecessarily. Let’s promote
              eco-friendly habits together!
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
