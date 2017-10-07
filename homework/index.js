/**
 * Created by Lyudmila on 07.10.2017.
 */
function numbers(array_numbers) {
    var min_number;
    var max_number;
    var sum_numbers = null;
    for (var i=0; i < array_numbers.length; i++) {
        if (typeof  array_numbers[i] === 'number' && !isNaN(array_numbers[i])) {
            sum_numbers += array_numbers[i];
            if (array_numbers[i] < min_number || min_number === undefined) {
                min_number = array_numbers[i];
            }
            if (array_numbers[i] > max_number || max_number === undefined) {
                max_number = array_numbers[i];
            }
        }

    }
    console.log('Minimum number is ' + min_number + ', maximum number is ' + max_number + ' and sum is ' + sum_numbers);
}
numbers([NaN, 5, 25]);