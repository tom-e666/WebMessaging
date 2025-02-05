// import {useState} from "react";
//
// export async function getServerSideProps() {
//     const res = await fetch("https://example.com/api/users/123");
//     const user = await res.json();
//
//     return { props: { user } };
// }
//
// export default function UserProfile({ user }) {
//     const [count, setCount] = useState(0);
//         return (
//         <div>
//             <h2>{user.name}</h2>
//             <p>Clicks: {count}</p>
//             <button onClick={() => setCount(count + 1)}>Click Me</button>
//         </div>
//     );
// }
