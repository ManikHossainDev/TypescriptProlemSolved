# Typescript Problem Solved
1) What are some differences between interfaces and types in TypeScript?

  Interface এবং Type–এর মধ্যে পার্থক্য ঠিক যেমন দুইজন আলাদা চরিত্র। Interface হলো strict অফিস-বস, যার নিয়ম মেনে কাজ করতে হয়। এটি শুধু object-এর structure ঠিক রাখে এবং discipline maintain করে। অন্যদিকে Type হলো chill guy, যেখানে তুমি union, tuple, primitive—সবকিছু assign        করতে পারো। Type বেশি flexible, কিন্তু একই নামে আবার declare করা যায় না। সহজভাবে বলতে গেলে, Interface rigid, Type flexible।

2) What is the use of the keyof keyword in TypeScript? Provide an example.
   
  keyof হলো এমন একটি tool যা object-এর সব keyকে type হিসেবে ধরে। এটি cupboard-এর চাবির মতো কাজ করে—যে চাবি আছে, তার মাধ্যমেই drawer খোলা যাবে। ঠিক তেমনি keyof দিয়ে object-এর key-গুলো type হিসেবে ব্যবহার করা যায়, এবং ভুল key ব্যবহার করা থেকে বিরত রাখা যায়।

3) Explain the difference between any, unknown, and never types in TypeScript.
   
  TypeScript-এর এই তিনটি special type একদম family drama-এর মতো। any হলো boss-এর দাদা, সবকিছু assign করতে পারো। unknown হলো careful ভাই, আগে check করতে হবে তারপর ব্যবহার করা যাবে। never হলো impossible uncle, যা কিছুই করবে না এবং এমন পরিস্থিতি বোঝায় যা logically ঘটতেই     পারে না। এই analogy ব্যবহার করলে এগুলো মনে রাখা সহজ হয়।

4) What is the use of enums in TypeScript? Provide an example of a numeric and string enum.
   
  Enum হলো fixed-value তালিকা, একবার বানালে আর পরিবর্তন করা যায় না। Numeric enum নিজে থেকেই 0,1,2… নাম্বার দিয়ে দেয়, আর String enum-এ প্রতিটি মান ম্যানুয়ালি ঠিক করতে হয়। ঠিক যেমন gang-এর সদস্যরা নির্দিষ্ট, Enum-এর মানও predetermined। এটি ভুল ব্যবহার করলে প্রজেক্টে অসঙ্গতি তৈরি হতে পারে।

5) Provide an example of using union and intersection types in TypeScript.
    
  Union এবং Intersection ভিন্ন ধরনের টাইপের logic বোঝায়। Union চায় value যেকোনো একটি সম্ভাব্য type হতে পারে, যেমন কেউ সিদ্ধান্ত নিচ্ছে আজ কেচাপ নেবে নাকি মায়োনিজ—একটিই যথেষ্ট। কিন্তু Intersection চায় সব শর্ত একসাথে পূরণ করতে হবে, অর্থাৎ কেচাপও লাগবে, মায়োনিজও লাগবে। সহজভাবে বলতে   গেলে, Union flexible, Intersection সবকিছুর combination নিশ্চিত করে।
