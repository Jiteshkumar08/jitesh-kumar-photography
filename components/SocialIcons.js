import userData from '@constants/data'
import React from 'react'

const SocialIcons = ({ isContact = false }) => {
    const linkClass = isContact ? "h-10 w-10 rounded-full hover:bg-blue-500 flex items-center text-white justify-center cursor-pointer" : "text-base font-normal text-gray-600 dark:text-gray-300"

    return (
        <>
            <a href={userData.socialLinks[0].url}
                className={linkClass}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-instagram h-5 w-5"
                    viewBox="0 0 16 16"
                >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
            </a>
            <a
                href={userData.socialLinks[1].url}
                className={linkClass}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-github h-6 w-6"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475 0-.237-.012-1.025-.012-1.862-2.513.462-3.163-.613-3.363-1.175a3.636 3.636 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2.001 2.001 0 0 1 1.538 1.025 2.137 2.137 0 0 0 2.912.825 2.104 2.104 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 0 1 1.025-2.688 3.594 3.594 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.593 3.593 0 0 1 .1 2.65 3.869 3.869 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.563 4.937a2.368 2.368 0 0 1 .675 1.85c0 1.338-.012 2.413-.012 2.75 0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247Z" />
                </svg>
            </a>
            <a
                href={userData.socialLinks[2].url}
                className={linkClass}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-behance h-6 w-6"
                    viewBox="0 0 .48 .48"
                >
                    <path d="M.401.127H.3v.028h.102ZM.38.321a.045.045 0 0 1-.026.007A.045.045 0 0 1 .32.317.05.05 0 0 1 .308.282H.44a.129.129 0 0 0-.003-.04.102.102 0 0 0-.016-.035.083.083 0 0 0-.028-.024.087.087 0 0 0-.04-.009.098.098 0 0 0-.038.007.09.09 0 0 0-.029.02.088.088 0 0 0-.019.03.108.108 0 0 0-.007.038.11.11 0 0 0 .006.039.089.089 0 0 0 .018.031.08.08 0 0 0 .029.02.104.104 0 0 0 .039.007.095.095 0 0 0 .053-.014.084.084 0 0 0 .033-.047H.394A.031.031 0 0 1 .382.32ZM.311.239a.037.037 0 0 1 .02-.023.046.046 0 0 1 .02-.004.035.035 0 0 1 .027.01.058.058 0 0 1 .013.029H.308A.06.06 0 0 1 .31.239ZM.205.229a.061.061 0 0 0 .026-.02A.054.054 0 0 0 .24.177a.066.066 0 0 0-.006-.03.048.048 0 0 0-.016-.02.065.065 0 0 0-.025-.01A.151.151 0 0 0 .16.114H.04v.252h.122A.131.131 0 0 0 .195.362.091.091 0 0 0 .224.349a.063.063 0 0 0 .02-.023.068.068 0 0 0 .007-.033.069.069 0 0 0-.011-.04.06.06 0 0 0-.035-.024ZM.095.157h.052a.083.083 0 0 1 .014.001.033.033 0 0 1 .012.004.021.021 0 0 1 .008.009.028.028 0 0 1 .003.014.027.027 0 0 1-.009.023.04.04 0 0 1-.024.007H.095Zm.097.149a.026.026 0 0 1-.009.01.04.04 0 0 1-.013.005.067.067 0 0 1-.016.002h-.06V.254h.06a.048.048 0 0 1 .029.008.033.033 0 0 1 .011.028.035.035 0 0 1-.002.016Z" /> </svg>
            </a>
        </>
    )
}

export default SocialIcons