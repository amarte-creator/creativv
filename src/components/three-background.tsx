'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<{
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    renderer: THREE.WebGLRenderer
    particles: THREE.Points
    frameId: number
  } | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 1500
    const posArray = new Float32Array(particlesCount * 3)
    
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15
    }
    
    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3)
    )

    // Particle material with gradient colors
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.015,
      color: 0x2979ff,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    })

    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    // Add geometric shapes
    const geometry = new THREE.IcosahedronGeometry(1, 1)
    const material = new THREE.MeshPhongMaterial({
      color: 0x2979ff,
      transparent: true,
      opacity: 0.1,
      wireframe: true,
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(3, 0, 0)
    scene.add(mesh)

    const mesh2 = new THREE.Mesh(geometry, material)
    mesh2.position.set(-3, 2, -2)
    scene.add(mesh2)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)
    
    const pointLight = new THREE.PointLight(0x2979ff, 1)
    pointLight.position.set(5, 5, 5)
    scene.add(pointLight)

    const pointLight2 = new THREE.PointLight(0x9c27b0, 1)
    pointLight2.position.set(-5, -5, -5)
    scene.add(pointLight2)

    sceneRef.current = { scene, camera, renderer, particles, frameId: 0 }

    // Mouse movement interaction
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    const animate = () => {
      if (!sceneRef.current) return

      sceneRef.current.frameId = requestAnimationFrame(animate)

      // Rotate particles
      particles.rotation.x += 0.0005
      particles.rotation.y += 0.0005

      // Rotate meshes
      mesh.rotation.x += 0.005
      mesh.rotation.y += 0.005
      mesh2.rotation.x -= 0.003
      mesh2.rotation.y -= 0.003

      // Camera movement based on mouse
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05
      camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!sceneRef.current) return
      
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      
      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.frameId)
        renderer.dispose()
        particlesGeometry.dispose()
        particlesMaterial.dispose()
        geometry.dispose()
        material.dispose()
        if (containerRef.current?.contains(renderer.domElement)) {
          containerRef.current.removeChild(renderer.domElement)
        }
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 1 }}
    />
  )
}

