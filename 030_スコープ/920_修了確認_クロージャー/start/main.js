/**
 * 問題：
 * 四則演算を行うメソッドを持ったオブジェクトを
 * クロージャーを用いて作成してみてください。
 * 
 * 四則演算を行うメソッド（plus, minus, multiply, divide）
 * を実行すると以下のようにコンソールに出力されます。
 * 
 * const calc = calcFactory(10); // 初期値を10として設定
 * calc.plus(5);      // 出力結果 "10 + 5 = 15"
 * calc.minus(3);     // 出力結果 "15 - 3 = 12"
 * calc.multiply(3);  // 出力結果 "12 x 3 = 36"
 * calc.divide(2);    // 出力結果 "36 / 2 = 18"
 * 
 * ※前に行った計算結果をもとに四則演算を行います。
 * ※四則演算は"+","-","*","/"を数値ではさんで計算を行います。
 */

function calcFuctory(num){
    function plus(numPlus){
        num = num + numPlus;
        console.log(num + '+' + numPlus + '=' + (num))
    }
    function minus(numMinus){
        num = num - numMinus;
        console.log(num + '-' + numMinus + '=' + (num))
    }
    function multiply(numMultiply){
        num = num * numMultiply;
        console.log(num + 'X' + numMultiply + '=' + (num))
    }
    function divide(numDivide){
        num = num  / numDivide;
        console.log(num + '/' + numDivide + '=' + (num))
    }

    return{
        plus,
        minus,
        multiply,
        divide
    }

}


let calc = calcFuctory(10);

calc.plus(5);      // 出力結果 "10 + 5 = 15"
calc.minus(3);     // 出力結果 "15 - 3 = 12"
calc.multiply(3);  // 出力結果 "12 x 3 = 36"
calc.divide(2);    // 出力結果 "36 / 2 = 18"
