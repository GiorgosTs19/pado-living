import { useLang } from '@/lang';
import { useBreakfastMenuStatus } from '@/hooks';
import { MenuCard } from 'components/MenuCard';

export function Menus() {
  const { getTranslation } = useLang();

  const { isOrderingOpen: canOrder, remainingTime, availableMenu: tomorrowMenu, todayMenu, nextAvailableDay } = useBreakfastMenuStatus();

  return (
    <section className={'px-[5%] py-20 bg-primary/60'} id={'Breakfast'}>
      <h2 className={'text-start text-4xl font-bold mb-10 ps-3 '}> {getTranslation(`sections.menus.title`)}</h2>

      <div className="grid lg:grid-cols-2 gap-8 ">
        <div className="text-base md:text-lg lg:text-xl text-secondary flex flex-col justify-center bg-white rounded-2xl shadow-md">
          <div className="p-6 md:p-8 lg:px-10">
            <p className="mb-3">{getTranslation('sections.menus.rules.orderCutoff')}</p>
            <p dangerouslySetInnerHTML={{ __html: getTranslation('sections.menus.rules.cutoffTime')! }} />
          </div>

          <div className="p-6 md:p-8 lg:px-10 pt-0">
            <p dangerouslySetInnerHTML={{ __html: getTranslation('sections.menus.rules.rotation')! }} />
          </div>

          <div className="p-6 md:p-8 lg:px-10 pt-0">
            <p dangerouslySetInnerHTML={{ __html: getTranslation('sections.menus.rules.packaging')! }} />
          </div>

          <div className="p-6 md:p-8 lg:px-10 pt-0">
            <p>{getTranslation('sections.menus.rules.thanks')}</p>
          </div>
        </div>

        <div className={'flex flex-col justify-between gap-10'}>
          <MenuCard label={`Order for ${nextAvailableDay}`} menuId={tomorrowMenu} isOrderable={canOrder} remainingTime={remainingTime} />
          <MenuCard label="Served Today" menuId={todayMenu} isOrderable={false} />
        </div>
      </div>
    </section>
  );
}

import { ChangeEvent, useState } from 'react';
import { Textarea } from '@/components/TextArea';

export const BreakfastSection = () => {
  const { getTranslation } = useLang();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '8:00',
    guests: '1',
    dietaryRestrictions: false,
    restrictions: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDietaryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setFormData(prev => ({
      ...prev,
      dietaryRestrictions: checked,
      restrictions: !checked ? '' : prev.restrictions,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // toast({
    //   title: 'Breakfast Request Submitted',
    //   description: `Your ${breakfastOptions.find(o => o.id === breakfastType)?.name} has been requested for ${formData.date}.`,
    // });
  };

  return (
    <section id="breakfast" className="px-[5%] py-20">
      <div className="container mx-auto">
        <h2 className={'text-center text-4xl font-bold mb-5'}>{getTranslation(`sections.menus.title`)}</h2>

        {/*<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">*/}
        {/*{breakfastOptions.map(option => (*/}
        {/*  <Card*/}
        {/*    key={option.id}*/}
        {/*    className={`overflow-hidden transition-all hover:shadow-md ${breakfastType === option.id ? 'ring-2 ring-primary' : ''}`}*/}
        {/*  >*/}
        {/*    <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${option.image})` }} />*/}
        {/*    <CardContent className="p-5">*/}
        {/*      <div className="flex items-center justify-between mb-2">*/}
        {/*        <h3 className="font-semibold text-lg">{option.name}</h3>*/}
        {/*        <span className="text-sm font-medium text-primary">{option.price}</span>*/}
        {/*      </div>*/}
        {/*      <p className="text-muted-foreground text-sm mb-4">{option.description}</p>*/}
        {/*      <Button*/}
        {/*        variant={breakfastType === option.id ? 'default' : 'outline'}*/}
        {/*        className={breakfastType === option.id ? 'bg-primary hover:bg-primary/80' : ''}*/}
        {/*        onClick={() => setBreakfastType(option.id)}*/}
        {/*      >*/}
        {/*        Select*/}
        {/*      </Button>*/}
        {/*    </CardContent>*/}
        {/*  </Card>*/}
        {/*))}*/}
        {/*</div>*/}

        <div className=" p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-2xl font-semibold">Request Breakfast</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="email">Name</label>
                    <input
                      className="appearance-none bg-transparent border-b-[1px] border-b-border w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="text"
                      placeholder="Jane Doe"
                      aria-label="Full name"
                      id="name"
                      name="name"
                    />
                    {/*<Input id="name" name="name" value={formData.name} onChange={handleChange} required />*/}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="guests">Number of Guests</label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-[1px] border-b-border p-1"
                      required
                    >
                      {[1, 2, 3, 4, 5, 6].map(num => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="date">Date</label>
                    <input
                      className="appearance-none bg-transparent border-b-[1px] border-b-border w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="date"
                      placeholder="Jane Doe"
                      aria-label="Full name"
                      id="date"
                      name="date"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="time">Time</label>
                    <input
                      className="appearance-none bg-transparent border-b-[1px] border-b-border w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="time"
                      placeholder="Jane Doe"
                      aria-label="Full name"
                      id="time"
                      name="time"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <input type={'checkbox'} id="dietary" checked={formData.dietaryRestrictions} onChange={handleDietaryChange} />
                  <label htmlFor="dietary" className="font-normal">
                    I have dietary restrictions
                  </label>
                </div>

                {formData.dietaryRestrictions && (
                  <div className="space-y-2">
                    <label htmlFor="restrictions">Please specify your dietary restrictions</label>
                    <Textarea
                      id="restrictions"
                      name="restrictions"
                      value={formData.restrictions}
                      onChange={handleChange}
                      placeholder="e.g., allergies, vegetarian, vegan, etc."
                    />
                  </div>
                )}

                <button type="submit" className="bg-primary hover:bg-primary/80 text-gray-800 font-semibold py-2 px-4 rounded shadow cursor-pointer">
                  Submit Breakfast Request
                </button>
              </form>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Breakfast Rules & Information</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Breakfast is served from 7:00 AM to 10:30 AM daily.</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Continental breakfast is included with your stay.</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Please request breakfast at least one day in advance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Special dietary requirements can be accommodated with advance notice.</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Additional breakfast options have an extra charge as indicated.</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Breakfast can be served in our dining area or on the terrace.</span>
                </li>
              </ul>

              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <h4 className="font-medium text-primary mb-2">Good to know</h4>
                <p className="text-sm text-gray-700">
                  We source our ingredients locally for freshness and support of local businesses. Our eggs come from a nearby farm, our bread is
                  baked fresh each morning, and our fruits are seasonal and locally sourced when possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
