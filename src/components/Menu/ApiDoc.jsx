import React from "react";

const ApiDoc = () => {
  return (
    <>
      <details>
        <summary>API Documentation</summary>
        {/* <h1 id="elab-pelitabangsa">eLab pelitabangsa</h1>
  <h3 id="build-with-node-js-and-">Build with Node.js and ❤️</h3>
  <p>Test with Postman or Rest Client</p>
  <h1 id="api-documentation-">API Documentation :</h1> */}
        <h2 id="get-all-users">GET all users</h2>
        <h3 id="request">Request</h3>
        <p>
          <code>GET /users/</code>
        </p>
        <pre>
          <code>
            http:<span className="hljs-regexp">//</span>localhost:
            <span className="hljs-number">4000</span>
            <span className="hljs-regexp">/users/</span>
            {"\n"}
          </code>
        </pre>
        <h3 id="response">Response</h3>
        <pre>
          <code>
            [{"\n"}
            {"  "}
            {"{"}
            {"\n"}
            {"      "}
            <span className="hljs-attr">"uuid"</span>:{" "}
            <span className="hljs-string">
              "0173bf2a-86b0-4be5-b445-eb8b2805875b"
            </span>
            ,{"\n"}
            {"      "}
            <span className="hljs-attr">"nama"</span>:{" "}
            <span className="hljs-string">"Asisten"</span>,{"\n"}
            {"      "}
            <span className="hljs-attr">"email"</span>:{" "}
            <span className="hljs-string">"asisten@gmail.com"</span>,{"\n"}
            {"      "}
            <span className="hljs-attr">"role"</span>:{" "}
            <span className="hljs-string">"admin"</span>
            {"\n"}
            {"  "}
            {"}"},{"\n"}
            {"  "}
            {"{"}
            {"\n"}
            {"      "}
            <span className="hljs-attr">"uuid"</span>:{" "}
            <span className="hljs-string">
              "44a78fd6-41bc-438f-885a-0de9291f3788"
            </span>
            ,{"\n"}
            {"      "}
            <span className="hljs-attr">"nama"</span>:{" "}
            <span className="hljs-string">"Dummy"</span>,{"\n"}
            {"      "}
            <span className="hljs-attr">"email"</span>:{" "}
            <span className="hljs-string">"dummy@gmail.com"</span>,{"\n"}
            {"      "}
            <span className="hljs-attr">"role"</span>:{" "}
            <span className="hljs-string">"user"</span>
            {"\n"}
            {"  "}
            {"}"}
            {"\n"}]{"\n"}
          </code>
        </pre>
        <h2 id="get-users-by-id">GET users By Id</h2>
        <h3 id="request">Request</h3>
        <p>
          <code>GET /users/:id</code>
        </p>
        <pre>
          <code>
            http://localhost:<span className="hljs-number">4000</span>/users/
            <span className="hljs-number">0173bf2a</span>-
            <span className="hljs-number">86b0</span>-4be5-b445-eb8b2805875b
            {"\n"}
          </code>
        </pre>
        <h3 id="response">Response</h3>
        <pre>
          <code>
            [{"\n"}
            {"  "}
            {"{"}
            {"\n"}
            {"      "}
            <span className="hljs-attr">"uuid"</span>:{" "}
            <span className="hljs-string">
              "0173bf2a-86b0-4be5-b445-eb8b2805875b"
            </span>
            ,{"\n"}
            {"      "}
            <span className="hljs-attr">"nama"</span>:{" "}
            <span className="hljs-string">"Asisten"</span>,{"\n"}
            {"      "}
            <span className="hljs-attr">"email"</span>:{" "}
            <span className="hljs-string">"asisten@gmail.com"</span>,{"\n"}
            {"      "}
            <span className="hljs-attr">"role"</span>:{" "}
            <span className="hljs-string">"admin"</span>
            {"\n"}
            {"  "}
            {"}"}
            {"\n"}]{"\n"}
          </code>
        </pre>
        <h2 id="create-new-users">Create new users</h2>
        <h3 id="request">Request</h3>
        <p>
          <code>POST /users/:id</code>
        </p>
        <pre>
          <code>
            http:<span className="hljs-regexp">//</span>localhost:
            <span className="hljs-number">4000</span>
            <span className="hljs-regexp">/users/</span>
            {"\n"}
            {"\n"}
            {"{"}
            {"\n"}
            {"  "}
            <span className="hljs-string">"nama"</span>:
            <span className="hljs-string">"fajar"</span>,{"\n"}
            {"  "}
            <span className="hljs-string">"email"</span>:
            <span className="hljs-string">"fajar@gmail.com"</span>,{"\n"}
            {"  "}
            <span className="hljs-string">"password"</span>:
            <span className="hljs-string">"fajar1232"</span>,{"\n"}
            {"  "}
            <span className="hljs-string">"konfirmPassword"</span>:
            <span className="hljs-string">"fajar1232"</span>,{"\n"}
            {"  "}
            <span className="hljs-string">"role"</span>:
            <span className="hljs-string">"admin"</span>
            {"\n"}
            {"}"}
            {"\n"}
          </code>
        </pre>
        <h3 id="response">Response</h3>
        <pre>
          <code>
            {"{"}
            {"\n"}
            {"  "}
            <span className="hljs-attr">"msg"</span>:{" "}
            <span className="hljs-string">"Register Berhasil"</span>
            {"\n"}
            {"}"}
            {"\n"}
          </code>
        </pre>
        <h2 id="update-users">Update users</h2>
        <h3 id="request">Request</h3>
        <p>
          <code>PATCH /users/:id</code>
        </p>
        <pre>
          <code>
            http://localhost:<span className="hljs-number">4000</span>/users/
            <span className="hljs-number">0173bf2a</span>-
            <span className="hljs-number">86b0</span>-4be5-b445-eb8b2805875b
            {"\n"}
            {"\n"}
            {"{"}
            {"\n"}
            {"  "}
            <span className="hljs-string">"nama"</span>:
            <span className="hljs-string">"Fajar Agung"</span>,{"\n"}
            {"  "}
            <span className="hljs-string">"email"</span>:
            <span className="hljs-string">"fajar.agung@gmail.com"</span>,{"\n"}
            {"  "}
            <span className="hljs-string">"password"</span>:
            <span className="hljs-string">"fajar1232"</span>,{"\n"}
            {"  "}
            <span className="hljs-string">"konfirmPassword"</span>:
            <span className="hljs-string">"fajar1232"</span>,{"\n"}
            {"  "}
            <span className="hljs-string">"role"</span>:
            <span className="hljs-string">"admin"</span>
            {"\n"}
            {"}"}
            {"\n"}
          </code>
        </pre>
        <h3 id="response">Response</h3>
        <pre>
          <code>
            {"{"}
            {"\n"}
            {"  "}
            <span className="hljs-attr">"msg"</span>:{" "}
            <span className="hljs-string">"Update berhasil!"</span>
            {"\n"}
            {"}"}
            {"\n"}
          </code>
        </pre>
        <h2 id="delete-users">Delete users</h2>
        <h3 id="request">Request</h3>
        <p>
          <code>DELETE /users/:id</code>
        </p>
        <pre>
          <code>
            http://localhost:<span className="hljs-number">4000</span>/users/
            <span className="hljs-number">0173bf2a</span>-
            <span className="hljs-number">86b0</span>-4be5-b445-eb8b2805875b
            {"\n"}
          </code>
        </pre>
        <h3 id="response">Response</h3>
        <pre>
          <code>
            {"{"}
            {"\n"}
            {"  "}
            <span className="hljs-attr">"msg"</span>:{" "}
            <span className="hljs-string">"Hapus berhasil!"</span>
            {"\n"}
            {"}"}
            {"\n"}
          </code>
        </pre>
        <hr />
        <h2 id="login-users">Login users</h2>
        <h3 id="request">Request</h3>
        <p>
          <code>POST /login/</code>
        </p>
        <pre>
          <code>
            <span className="hljs-symbol">http:</span>
            <span className="hljs-comment">//localhost:4000/login</span>
            {"\n"}
          </code>
        </pre>
        <h3 id="response">Response</h3>
        <pre>
          <code>
            {"{"}
            {"\n"}
            {"  "}
            <span className="hljs-attr">"uuid"</span>:{" "}
            <span className="hljs-string">
              "0173bf2a-86b0-4be5-b445-eb8b2805875b"
            </span>
            ,{"\n"}
            {"  "}
            <span className="hljs-attr">"email"</span>:{" "}
            <span className="hljs-string">"asisten@gmail.com"</span>,{"\n"}
            {"  "}
            <span className="hljs-attr">"role"</span>:{" "}
            <span className="hljs-string">"admin"</span>
            {"\n"}
            {"}"}
            {"\n"}
          </code>
        </pre>
        <h2 id="profile-users">Profile users</h2>
        <h3 id="request">Request</h3>
        <p>
          <code>GET /profile/</code>
        </p>
        <pre>
          <code>
            <span className="hljs-symbol">http:</span>
            <span className="hljs-comment">//localhost:4000/profile</span>
            {"\n"}
          </code>
        </pre>
        <h3 id="response">Response</h3>
        <pre>
          <code>
            {"{"}
            {"\n"}
            {"  "}
            <span className="hljs-attr">"uuid"</span>:{" "}
            <span className="hljs-string">
              "0173bf2a-86b0-4be5-b445-eb8b2805875b"
            </span>
            ,{"\n"}
            {"  "}
            <span className="hljs-attr">"nama"</span>:{" "}
            <span className="hljs-string">"Asisten"</span>,{"\n"}
            {"  "}
            <span className="hljs-attr">"email"</span>:{" "}
            <span className="hljs-string">"asisten@gmail.com"</span>,{"\n"}
            {"  "}
            <span className="hljs-attr">"role"</span>:{" "}
            <span className="hljs-string">"admin"</span>
            {"\n"}
            {"}"}
            {"\n"}
          </code>
        </pre>
        <h2 id="logout">Logout</h2>
        <h3 id="request">Request</h3>
        <p>
          <code>DELETE /logout/</code>
        </p>
        <pre>
          <code>
            <span className="hljs-symbol">http:</span>
            <span className="hljs-comment">//localhost:4000/logout</span>
            {"\n"}
          </code>
        </pre>
        <h3 id="response">Response</h3>
        <pre>
          <code>
            {"{"}
            {"\n"}
            {"  "}
            <span className="hljs-attr">"msg"</span>:{" "}
            <span className="hljs-string">"Anda telah logout"</span>
            {"\n"}
            {"}"}
            {"\n"}
          </code>
        </pre>
        <hr />
        <h2 id="get-all-jadwal">GET all jadwal</h2>
        <h3 id="request">Request</h3>
        <p>
          <code>GET /jadwal/</code>
        </p>
        <pre>
          <code>
            <span className="hljs-symbol">http:</span>
            <span className="hljs-comment">//localhost:4000/jadwal</span>
            {"\n"}
          </code>
        </pre>
        <h3 id="response">Response</h3>
        <pre>
          <code>
            {"  "}[{"\n"}
            {"    "}
            {"{"}
            {"\n"}
            {"      "}
            <span className="hljs-attr">"uuid"</span>:{" "}
            <span className="hljs-string">
              "ecedadec-0495-478b-a504-c7c10bc78dc9"
            </span>
            ,{"\n"}
            {"      "}
            <span className="hljs-attr">"dosen"</span>:{" "}
            <span className="hljs-string">"Najamuddin dwi, S.Kom, M.Kom"</span>,
            {"\n"}
            {"      "}
            <span className="hljs-attr">"asisten1"</span>:{" "}
            <span className="hljs-string">"Fajar Agung"</span>,{"\n"}
            {"      "}
            <span className="hljs-attr">"asisten2"</span>:{" "}
            <span className="hljs-string">"M. Romdon"</span>,{"\n"}
            {"      "}
            <span className="hljs-attr">"tanggal"</span>:{" "}
            <span className="hljs-string">"2023-03-23"</span>,{"\n"}
            {"      "}
            <span className="hljs-attr">"jam"</span>:{" "}
            <span className="hljs-string">"09:30"</span>,{"\n"}
            {"      "}
            <span className="hljs-attr">"kelas"</span>:{" "}
            <span className="hljs-string">"TI.20.A.3"</span>,{"\n"}
            {"      "}
            <span className="hljs-attr">"praktikum"</span>:{" "}
            <span className="hljs-string">"Data Mining"</span>,{"\n"}
            {"      "}
            <span className="hljs-attr">"user"</span>: {"{"}
            {"\n"}
            {"          "}
            <span className="hljs-attr">"nama"</span>:{" "}
            <span className="hljs-string">"Asisten"</span>,{"\n"}
            {"          "}
            <span className="hljs-attr">"email"</span>:{" "}
            <span className="hljs-string">"asisten@gmail.com"</span>
            {"\n"}
            {"      "}
            {"}"}
            {"\n"}
            {"    "}
            {"}"},{"\n"}
            {"    "}
            {"{"}
            {"\n"}
            {"      "}
            <span className="hljs-attr">"uuid"</span>:{" "}
            <span className="hljs-string">
              "ad8c8edb-38f4-4c9d-93c0-3a8546f21b80"
            </span>
            ,{"\n"}
            {"      "}
            <span className="hljs-attr">"dosen"</span>:{" "}
            <span className="hljs-string">"Alfiyan, S.Kom"</span>,{"\n"}
            {"      "}
            <span className="hljs-attr">"asisten1"</span>:{" "}
            <span className="hljs-string">"Veno Setyoaji"</span>,{"\n"}
            {"      "}
            <span className="hljs-attr">"asisten2"</span>:{" "}
            <span className="hljs-string">"Maulana Muhammad"</span>,{"\n"}
            {"      "}
            <span className="hljs-attr">"tanggal"</span>:{" "}
            <span className="hljs-string">"2023-03-23"</span>,{"\n"}
            {"      "}
            <span className="hljs-attr">"jam"</span>:{" "}
            <span className="hljs-string">"13:00"</span>,{"\n"}
            {"      "}
            <span className="hljs-attr">"kelas"</span>:{" "}
            <span className="hljs-string">"TI.20.A.1"</span>,{"\n"}
            {"      "}
            <span className="hljs-attr">"praktikum"</span>:{" "}
            <span className="hljs-string">"Data Mining"</span>,{"\n"}
            {"      "}
            <span className="hljs-attr">"user"</span>: {"{"}
            {"\n"}
            {"          "}
            <span className="hljs-attr">"nama"</span>:{" "}
            <span className="hljs-string">"Asisten"</span>,{"\n"}
            {"          "}
            <span className="hljs-attr">"email"</span>:{" "}
            <span className="hljs-string">"asisten@gmail.com"</span>
            {"\n"}
            {"      "}
            {"}"}
            {"\n"}
            {"    "}
            {"}"},{"\n"}
            {"    "}
            {"{"}
            {"\n"}
            {"      "}
            <span className="hljs-attr">"uuid"</span>:{" "}
            <span className="hljs-string">
              "3c7e457a-d621-49f5-a2a3-2a917428cb6e"
            </span>
            ,{"\n"}
            {"      "}
            <span className="hljs-attr">"dosen"</span>:{" "}
            <span className="hljs-string">"Agung Nugroho, S.Kom, M.Kom"</span>,
            {"\n"}
            {"      "}
            <span className="hljs-attr">"asisten1"</span>:{" "}
            <span className="hljs-string">"Veno Setyoaji"</span>,{"\n"}
            {"      "}
            <span className="hljs-attr">"asisten2"</span>:{" "}
            <span className="hljs-string">"Maulana Muhammad"</span>,{"\n"}
            {"      "}
            <span className="hljs-attr">"tanggal"</span>:{" "}
            <span className="hljs-string">"2023-03-30"</span>,{"\n"}
            {"      "}
            <span className="hljs-attr">"jam"</span>:{" "}
            <span className="hljs-string">"02:48"</span>,{"\n"}
            {"      "}
            <span className="hljs-attr">"kelas"</span>:{" "}
            <span className="hljs-string">"TI.20.A.1"</span>,{"\n"}
            {"      "}
            <span className="hljs-attr">"praktikum"</span>:{" "}
            <span className="hljs-string">"Bahasa Pemrograman"</span>,{"\n"}
            {"      "}
            <span className="hljs-attr">"user"</span>: {"{"}
            {"\n"}
            {"          "}
            <span className="hljs-attr">"nama"</span>:{" "}
            <span className="hljs-string">"Asisten"</span>,{"\n"}
            {"          "}
            <span className="hljs-attr">"email"</span>:{" "}
            <span className="hljs-string">"asisten@gmail.com"</span>
            {"\n"}
            {"        "}
            {"}"}
            {"\n"}
            {"    "}
            {"}"}
            {"\n"}
            {"  "}]{"\n"}
          </code>
        </pre>
        <h2 id="get-jadwal-by-id">GET jadwal by Id</h2>
        <h3 id="request">Request</h3>
        <p>
          <code>GET /jadwal/:id</code>
        </p>
        <pre>
          <code>
            http:<span className="hljs-regexp">//</span>localhost:
            <span className="hljs-number">4000</span>
            <span className="hljs-regexp">/jadwal/</span>ecedadec-
            <span className="hljs-number">0495</span>-
            <span className="hljs-number">478</span>b-a504-c7c10bc78dc9{"\n"}
          </code>
        </pre>
        <h3 id="response">Response</h3>
        <pre>
          <code>
            {"{"}
            {"\n"}
            {"  "}
            <span className="hljs-attr">"uuid"</span>:{" "}
            <span className="hljs-string">
              "ecedadec-0495-478b-a504-c7c10bc78dc9"
            </span>
            ,{"\n"}
            {"  "}
            <span className="hljs-attr">"dosen"</span>:{" "}
            <span className="hljs-string">"Najamuddin dwi, S.Kom, M.Kom"</span>,
            {"\n"}
            {"  "}
            <span className="hljs-attr">"asisten1"</span>:{" "}
            <span className="hljs-string">"Fajar Agung"</span>,{"\n"}
            {"  "}
            <span className="hljs-attr">"asisten2"</span>:{" "}
            <span className="hljs-string">"M. Romdon"</span>,{"\n"}
            {"  "}
            <span className="hljs-attr">"tanggal"</span>:{" "}
            <span className="hljs-string">"2023-03-23"</span>,{"\n"}
            {"  "}
            <span className="hljs-attr">"jam"</span>:{" "}
            <span className="hljs-string">"09:30"</span>,{"\n"}
            {"  "}
            <span className="hljs-attr">"kelas"</span>:{" "}
            <span className="hljs-string">"TI.20.A.3"</span>,{"\n"}
            {"  "}
            <span className="hljs-attr">"praktikum"</span>:{" "}
            <span className="hljs-string">"Data Mining"</span>,{"\n"}
            {"  "}
            <span className="hljs-attr">"user"</span>: {"{"}
            {"\n"}
            {"      "}
            <span className="hljs-attr">"nama"</span>:{" "}
            <span className="hljs-string">"Asisten"</span>,{"\n"}
            {"      "}
            <span className="hljs-attr">"email"</span>:{" "}
            <span className="hljs-string">"asisten@gmail.com"</span>
            {"\n"}
            {"  "}
            {"}"}
            {"\n"}
            {"}"}
            {"\n"}
          </code>
        </pre>
        <h2 id="create-new-jadwal">Create new jadwal</h2>
        <h3 id="request">Request</h3>
        <p>
          <code>POST /jadwal/</code>
        </p>
        <pre>
          <code>
            <span className="hljs-symbol">http:</span>
            <span className="hljs-comment">//localhost:4000/jadwal</span>
            {"\n"}
            {"\n"}
            {"{"}
            {"\n"}
            {"  "}
            <span className="hljs-string">"dosen"</span>:
            <span className="hljs-string">"najamuddin, S.Kom, M.Kom"</span>,
            {"\n"}
            {"  "}
            <span className="hljs-string">"asisten1"</span>:
            <span className="hljs-string">"fajar"</span>,{"\n"}
            {"  "}
            <span className="hljs-string">"asisten2"</span>:
            <span className="hljs-string">"veno"</span>,{"\n"}
            {"  "}
            <span className="hljs-string">"tanggal"</span>:
            <span className="hljs-string">"20-03-2023"</span>,{"\n"}
            {"  "}
            <span className="hljs-string">"jam"</span>:
            <span className="hljs-string">"08:00"</span>,{"\n"}
            {"  "}
            <span className="hljs-string">"kelas"</span>:
            <span className="hljs-string">"TI.20.A.1"</span>,{"\n"}
            {"  "}
            <span className="hljs-string">"praktikum"</span>:
            <span className="hljs-string">"data mining"</span>
            {"\n"}
            {"}"}
            {"\n"}
          </code>
        </pre>
        <h3 id="response">Response</h3>
        <pre>
          <code>
            {"{"}
            {"\n"}
            {"  "}
            <span className="hljs-attr">"msg"</span>:{" "}
            <span className="hljs-string">"Jadwal berhasil dibuat!"</span>
            {"\n"}
            {"}"}
            {"\n"}
          </code>
        </pre>
        <h2 id="update-jadwal">Update jadwal</h2>
        <h3 id="request">Request</h3>
        <p>
          <code>PATCH /jadwal/</code>
        </p>
        <pre>
          <code>
            http://localhost:4000/jadwal/ad8c8edb
            <span className="hljs-string">-38</span>f4
            <span className="hljs-string">-4</span>c9d
            <span className="hljs-string">-93</span>c0
            <span className="hljs-string">-3</span>a8546f21b80{"\n"}
          </code>
        </pre>
        <h3 id="response">Response</h3>
        <pre>
          <code>
            {"{"}
            {"\n"}
            {"  "}
            <span className="hljs-attr">"uuid"</span>:{" "}
            <span className="hljs-string">
              "ad8c8edb-38f4-4c9d-93c0-3a8546f21b80"
            </span>
            ,{"\n"}
            {"  "}
            <span className="hljs-attr">"dosen"</span>:{" "}
            <span className="hljs-string">"Alfiyan, S.Kom"</span>,{"\n"}
            {"  "}
            <span className="hljs-attr">"asisten1"</span>:{" "}
            <span className="hljs-string">"Veno Setyoaji"</span>,{"\n"}
            {"  "}
            <span className="hljs-attr">"asisten2"</span>:{" "}
            <span className="hljs-string">"Maulana Muhammad"</span>,{"\n"}
            {"  "}
            <span className="hljs-attr">"tanggal"</span>:{" "}
            <span className="hljs-string">"2023-03-23"</span>,{"\n"}
            {"  "}
            <span className="hljs-attr">"jam"</span>:{" "}
            <span className="hljs-string">"13:00"</span>,{"\n"}
            {"  "}
            <span className="hljs-attr">"kelas"</span>:{" "}
            <span className="hljs-string">"TI.20.A.1"</span>,{"\n"}
            {"  "}
            <span className="hljs-attr">"praktikum"</span>:{" "}
            <span className="hljs-string">"Data Mining"</span>,{"\n"}
            {"}"}
            {"\n"}
          </code>
        </pre>
        <h2 id="delete-jadwal">Delete jadwal</h2>
        <h3 id="request">Request</h3>
        <p>
          <code>DELETE /jadwal/</code>
        </p>
        <pre>
          <code>
            http://localhost:4000/jadwal/ad8c8edb
            <span className="hljs-string">-38</span>f4
            <span className="hljs-string">-4</span>c9d
            <span className="hljs-string">-93</span>c0
            <span className="hljs-string">-3</span>a8546f21b80{"\n"}
          </code>
        </pre>
        <h3 id="response">Response</h3>
        <pre>
          <code>
            {"{"}
            {"\n"}
            {"  "}
            <span className="hljs-attr">"msg"</span>:{" "}
            <span className="hljs-string">"Jadwal berhasil di hapus!"</span>
            {"\n"}
            {"}"}
            {"\n"}
          </code>
        </pre>
      </details>
    </>
  );
};

export default ApiDoc;
