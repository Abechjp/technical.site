import React from "react"
import { Link } from "gatsby"

export default function NotFound() {
  return (
          <div className="not-found-message">
              <h1>404 Not Found。お探しの記事のページが見つかりません。</h1>
              <Link to="/">トップページへ</Link>
          </div>
  )
}


