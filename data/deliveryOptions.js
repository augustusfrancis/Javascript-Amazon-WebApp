import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import { formatCurrency } from '../scripts/utils/money.js';


export const deliveryOptions = [{
    id: '1',
    deliveryDays: 7,
    priceCents: 0
}, {
    id: '2',
    deliveryDays: 3,
    priceCents: 499
}, {
    id: '3',
    deliveryDays: 1,
    priceCents: 999
}];

export function getDeliveryOption(deliveryOptionId) {
    let deliveryOption;

    deliveryOptions.forEach((option) => {
        if (option.id === deliveryOptionId) {
            deliveryOption = option;
        }
    });

    return deliveryOption || deliveryOptions[0];
}

export function calculateDeliveryDate(deliveryOption) {
    const today = dayjs();
    let deliveryDate = today;
    let remainingDays = deliveryOption.deliveryDays;

    while (remainingDays > 0) {
        deliveryDate = deliveryDate.add(1, 'days');

        // Check if it's NOT Sunday (0 = Sunday in day.js)
        if (deliveryDate.day() !== 0) {
            remainingDays--;
        }
        // If it IS Sunday, we skip decrementing (effectively skipping the day)
    }

    const dateString = deliveryDate.format('dddd, MMMM D');
    const priceString = deliveryOption.priceCents === 0 ? 'FREE' : `$${formatCurrency(deliveryOption.priceCents)} -`;

    return { dateString, priceString };
}
