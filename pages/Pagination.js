import Link from "next/link";
import { useRouter } from "next/router";
import { HiArrowRight } from "react-icons/hi";
export default function Pagination({
  currentPage,
  totalPages,
  isFirstPage,
  isLastPage,
}) {
  const router = useRouter();

  const nextPage = () => {
    const nextPageNumber = currentPage + 1;
    router.push(`/${nextPageNumber}`);
  };

  const prevPage = () => {
    const prevPageNumber = currentPage - 1;
    router.push(`/${prevPageNumber}`);
  };

  return (
    <div
      className="page-nav-wrap wow fadeInUp mt-80 text-center"
      data-wow-delay=".3s"
    >
      <ul>

        {/* <li>
        {!isFirstPage && (
 

                <HiArrowRight onClick={prevPage}/>
            )}

        </li> */}

  

        {Array.from({ length: totalPages }).map((_, index) => (
          <li  key={index + 1} className={currentPage === index + 1 ? "current-page" : ""}>
            <Link key={index + 1} href={`/${index + 1}`}>
              {index + 1}
            </Link>
          </li>
        ))}
{/* 
        <li>
          {!isLastPage && (
            <a onClick={nextPage}>
              <HiArrowRight />
            </a>
          )}
        </li> */}
      </ul>
    </div>
  );
}
